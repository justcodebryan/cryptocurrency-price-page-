import { $get } from '@/api'
import { Currency } from '@/types/currency'

export const fetchCurrencyList = (filter_asset_id: string) =>
  $get<Currency[]>('/v1/assets', {
    filter_asset_id,
  })
