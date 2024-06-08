interface CreateDiaryDto {
  contents: string
}

interface UpdateDiaryDto {
  contents?: string
}

export { CreateDiaryDto, UpdateDiaryDto }