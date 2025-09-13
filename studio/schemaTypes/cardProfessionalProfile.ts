// schemas/cardProfessionalProfile.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cardProfessionalProfile',
  title: 'Professional Profile Card',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      description: 'Image of the professional',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      description: 'Full name of the professional',
      validation: (rule) => rule.required().max(100)
    }),
    defineField({
      name: 'role',
      title: 'Professional Role',
      type: 'string',
      description: 'Job title or role of the professional',
      validation: (rule) => rule.required().max(200)
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Used to control the display order',
      validation: (rule) => rule.required().min(0)
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this profile card',
      initialValue: true
    })
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}]
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{field: 'name', direction: 'asc'}]
    }
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
    prepare(selection) {
      const {title, subtitle, media} = selection
      return {
        title: title || 'Untitled',
        subtitle: subtitle || 'No role specified',
        media,
      }
    }
  }
})