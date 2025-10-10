// schemas/socialMediaLink.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'socialMediaLink',
  title: 'Social Media Link',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Social Media Platform',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Twitter (Legacy)', value: 'twitter' },
          { title: 'X (New Twitter)', value: 'x' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'TikTok', value: 'tiktok' },
          { title: 'WhatsApp Business', value: 'whatsapp' },
          { title: 'Telegram', value: 'telegram' }
        ],
        layout: 'dropdown'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'url',
      title: 'Social Media URL',
      type: 'url',
      description: 'Copy and paste the link you want to redirect to',
      placeholder: 'https://www.linkedin.com/company/yourcompany',
      validation: (rule) => rule.required().uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this social media link appears (lower numbers first)',
      initialValue: 1,
      validation: (rule) => rule.required().min(1).max(10)
    }),
    defineField({
      name: 'isActive',
      title: 'Show this link',
      type: 'boolean',
      description: 'Toggle to show/hide this social media link on the website',
      initialValue: true
    })
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    },
    {
      title: 'Platform Name',
      name: 'platformAsc',
      by: [{field: 'platform', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      platform: 'platform',
      url: 'url',
      order: 'order',
      isActive: 'isActive'
    },
    prepare(selection) {
      const {platform, url, order, isActive} = selection
      const platformNames: Record<string, string> = {
        linkedin: 'LinkedIn',
        twitter: 'Twitter (Legacy)',
        x: 'X (New Twitter)',
        facebook: 'Facebook',
        instagram: 'Instagram',
        youtube: 'YouTube',
        tiktok: 'TikTok',
        whatsapp: 'WhatsApp Business',
        telegram: 'Telegram'
      }
      
      const platformName = platformNames[platform] || platform
      const domain = url ? new URL(url).hostname : ''
      
      return {
        title: `${order}. ${platformName}`,
        subtitle: `${domain} ${!isActive ? '(Hidden)' : ''}`,
        media: () => '🔗'
      }
    }
  }
})