export type Schedule = {
  order: number
  dayOfWeek: number
  group: string
  auditory: {
    numerator: string
    denominator: string
  }
  subject: {
    numerator: string
    denominator: string
  }
  teacher: {
    numerator: string
    denominator: string
  }
}
