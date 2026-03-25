import { type SchemaTypeDefinition } from 'sanity'

// Block Content schema
const blockContent: SchemaTypeDefinition = {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        {title: 'Normal', value: 'normal'},
        {title: 'H1', value: 'h1'},
        {title: 'H2', value: 'h2'},
        {title: 'H3', value: 'h3'},
        {title: 'H4', value: 'h4'},
        {title: 'Quote', value: 'blockquote'},
      ],
      lists: [{title: 'Bullet', value: 'bullet'}],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {hotspot: true},
    },
  ],
}

// Category schema
const category: SchemaTypeDefinition = {
  title: 'Category',
  name: 'category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      title: 'Featured Image',
      name: 'featured_image',
      type: 'image',
    },
  ],
}

// Product schema
const product: SchemaTypeDefinition = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      title: 'SKU',
      name: 'sku',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' },
        },
      ],
    },
    {
      title: 'Featured Image',
      name: 'featured_image',
      type: 'image',
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Currency',
      name: 'currency',
      type: 'string',
      initialValue: 'USD',
      hidden: true,
    },
    {
      title: 'Sale Price',
      name: 'sale_price',
      type: 'number',
      hidden: ({ document }) => !document?.on_sale,
    },
    {
      title: 'On Sale?',
      name: 'on_sale',
      type: 'boolean',
    },
  ],
}

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContent, category, product],
}
