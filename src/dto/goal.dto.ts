interface CreateGoalDto {
  title: string
  contents: string
  type: boolean
  img: string // base64로 인코딩
}

interface UpdateGoalDto {
  title?: string
  contents?: string
  type?: boolean
  img?: string // 위와 같음
}

export { CreateGoalDto, UpdateGoalDto }