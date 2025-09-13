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
      validation: (rule) => rule.required().email()
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
      isActive: 'isActive'
    },
    prepare(selection) {
      const {email, subscribedAt, isActive} = selection
      const date = new Date(subscribedAt).toLocaleDateString()
      return {
        title: email,
        subtitle: `${isActive ? '✓ Active' : '✗ Inactive'} - Subscribed: ${date}`,
      }
    }
  }
})