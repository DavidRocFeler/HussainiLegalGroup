// schemas/footerSection.ts
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'footerSection',
  title: 'Footer Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Título de la sección (ej: Locations, Contact)',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'type',
      title: 'Section Type',
      type: 'string',
      options: {
        list: [
          { title: 'Locations', value: 'locations' },
          { title: 'Contact', value: 'contact' }
        ],
        layout: 'radio'
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de elementos para esta sección del footer',
      validation: (rule) => rule.required().min(1)
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Toggle to show/hide this section in the footer',
      initialValue: true
    })
  ],
  preview: {
    select: {
      title: 'title',
      type: 'type',
      isActive: 'isActive'
    },
    prepare(selection) {
      const { title, type, isActive } = selection
      return {
        title: `${title} (${type})`,
        subtitle: !isActive ? '(Hidden)' : ''
      }
    }
  }
})