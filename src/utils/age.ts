import dayjs from 'dayjs'

const BIRTHDATE = '1997-01-02'

export function getAge(): number {
  return dayjs().diff(dayjs(BIRTHDATE), 'year')
}
