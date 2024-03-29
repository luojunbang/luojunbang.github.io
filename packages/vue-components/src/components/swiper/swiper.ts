import type { PropType } from 'vue'
import type { ExtractPropTypes } from 'vue'

export type Direction = 'vertical' | 'horizon'

export const swiperProps = {
  direction: {
    type: String as PropType<'vertical' | 'horizon'>,
    default: 'vertical',
  },
}

export type SwiperProps = ExtractPropTypes<typeof swiperProps>
