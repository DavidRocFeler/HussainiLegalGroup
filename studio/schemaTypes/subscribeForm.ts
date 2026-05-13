// schemas/subscribeForm.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'subscribeForm',
  title: 'Newsletter Subscribers',
  type: 'document',
  fields: [
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule: any) => rule.required().email()
    }),
    defineField({
      name: 'interests',
      title: 'Areas of Interest',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Tech and Big Data', value: 'tech_and_big_data'},
          {title: 'AI', value: 'ai'},
          {title: 'Digital Assets', value: 'digital_assets'},
          {title: 'Music and Entertainment', value: 'music_and_entertainment'},
          {title: 'Capital Markets', value: 'capital_markets'}
        ],
        layout: 'tags'
      },
      description: 'Areas of interest selected by the subscriber'
    }),
    defineField({
      name: 'subscribedAt',
      title: 'Subscribed At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
      description: 'Whether the subscription is currently active'
    }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      initialValue: 'website',
      description: 'Where the subscription came from',
      options: {
        list: [
          {title: 'Website', value: 'website'},
          {title: 'Footer', value: 'footer'},
          {title: 'Landing Page', value: 'landing'},
          {title: 'Blog', value: 'blog'},
          {title: 'Other', value: 'other'}
        ]
      }
    })
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{field: 'subscribedAt', direction: 'desc'}]
    },
    {
      title: 'Active First',
      name: 'activeFirst',
      by: [{field: 'isActive', direction: 'desc'}]
    }
  ],
  preview: {
    select: {
      email: 'email',
      subscribedAt: 'subscribedAt',
      isActive: 'isActive',
      interests: 'interests'
    },
    prepare(selection: { 
      email: string;
      subscribedAt: string;
      isActive: boolean;
      interests: string[];
    }) {
      const {email, subscribedAt, isActive, interests} = selection
      const date = new Date(subscribedAt).toLocaleDateString()
      const interestsList = interests?.length 
        ? interests.join(', ') 
        : 'No interests selected'
      return {
        title: email,
        subtitle: `${isActive ? '✓ Active' : '✗ Inactive'} · ${date} · ${interestsList}`,
      }
    }
  }
})