export default class FixerDefaultModel {
    private timeStamp: number

    private date: string

    private base: string

    private USD: number

    private THB: number

    private CNY: number

    private JPY: number

    constructor(
      timeStamp: number,
      date: string,
      base: string,
      usd: number,
      thb: number,
      cny: number,
      jpy: number,
    ) {
      this.timeStamp = timeStamp
      this.date = date
      this.USD = usd
      this.THB = thb
      this.CNY = cny
      this.JPY = jpy
      this.base = base
    }

    public setTimeStamp(timeStamp: number): void {
      this.timeStamp = timeStamp
    }

    public setDate(date: string): void {
      this.date = date
    }

    public setUSD(usd: number): void {
      this.USD = usd
    }

    public setTHB(thb: number): void {
      this.THB = thb
    }

    public setCNY(cny: number): void {
      this.CNY = cny
    }

    public setJPY(jpy: number): void {
      this.JPY = jpy
    }

    public setBase(base: string): void {
      this.base = base
    }

    public getTimeStamp(): number {
      return this.timeStamp
    }

    public getDate(): string {
      return this.date
    }

    public getUSD(): number {
      return this.USD
    }

    public getTHB(): number {
      return this.THB
    }

    public getCNY(): number {
      return this.CNY
    }

    public getJPY(): number {
      return this.JPY
    }

    public getBase(): string {
      return this.base
    }
}
