export class Friend {
  private _name: string | null;
  private _surname: string | null;
  private _email: string | null;
  private _phoneNumber: number | null;
  private _language: string | null;


  get name(): string | null {
    return this._name;
  }

  set name(value: string | null) {
    this._name = value;
  }

  get surname(): string | null {
    return this._surname;
  }

  set surname(value: string | null) {
    this._surname = value;
  }

  get email(): string | null {
    return this._email;
  }

  set email(value: string | null) {
    this._email = value;
  }

  get phoneNumber(): number | null {
    return this._phoneNumber;
  }

  set phoneNumber(value: number | null) {
    this._phoneNumber = value;
  }

  get language(): string | null {
    return this._language;
  }

  set language(value: string | null) {
    this._language = value;
  }

  constructor(name: string | null, surname: string | null, email: string | null, phoneNumber: number | null, language: string | null) {
    this._name = name;
    this._surname = surname;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._language = language;
  }
}
