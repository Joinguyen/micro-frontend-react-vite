export interface IProfileDetails {
  avatar: string
  fName: string
  lName: string
  company: string
  contactPhone: string
  companySite: string
  country: string
  language: string
  timeZone: string
  currency: string
  communications: {
    email: boolean
    phone: boolean
  }
  allowMarketing: boolean
}

export interface IPassword {
  password: string
}

export interface IOption {
  value: string | number,
  label: string | number,
}

export interface IUpdateRoom {
  roomName: string,
  numberPeople: IOption,
  category: IOption,
  hashtags: IOption[],
  disclosure: boolean | string,
  password?: string,
}

export interface IFilterRoom {
  filter: string[]
}
