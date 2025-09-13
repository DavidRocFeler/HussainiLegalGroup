// schemas/contactMessage.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactMessage',
  title: 'Contact Messages',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.required().email()
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      description: 'Optional company name'
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (rule) => rule.required().min(10)
    }),
    defineField({
      name: 'receivedAt',
      title: 'Received At',
      type: 'datetime',
      initialValue: () => new Date().toISOString()
    }),
    defineField({
      name: 'isRead',
      title: 'Is Read',
      type: 'boolean',
      initialValue: false,
      description: 'Mark as read when reviewed'
    })
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{field: 'receivedAt', direction: 'desc'}]
    },
    {
      title: 'Unread First',
      name: 'unreadFirst',
      by: [{field: 'isRead', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      receivedAt: 'receivedAt'
    },
    prepare(selection) {
      const {title, subtitle, receivedAt} = selection
      const date = new Date(receivedAt).toLocaleDateString()
      return {
        title: title || 'Anonymous',
        subtitle: `${subtitle} - ${date}`,
      }
    }
  }
})