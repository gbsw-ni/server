interface CreateDiaryDto {
  contents: string
  mission: number
  rating: number
}

interface UpdateDiaryDto {
  contents?: string
  mission?: number
  rating?: number
}

export { CreateDiaryDto, UpdateDiaryDto }