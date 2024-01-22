import { PATHS } from './constants'
import { Brand, Product } from '../assets/images/icons'

export const BUSINESS_SIDEBAR_CONFIG = {
  children: [
    {
      label: 'Brand',
      icon: Brand,
      children: [
        {
          label: 'Create',
          path: PATHS.BRAND_CREATE,
        },
        {
          label: 'List',
          path: PATHS.BRAND_LIST,
        },
      ],
    },
    {
      label: 'Product',
      icon: Product,
      children: [
        {
          label: 'Create',
          path: PATHS.PRODUCT_CREATE,
        },
        {
          label: 'List',
          path: PATHS.PRODUCT_LIST,
        },
      ],
    },
  ],
}
