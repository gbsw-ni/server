interface Goal {
  id: number
  title: string
  contents: string
  type: boolean //inside는 참 outside는 거짓
  img: string
  rating: number
  createdAt: string
  updatedAt: string
  // user: ----
}

export { Goal }