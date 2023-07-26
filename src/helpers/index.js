export class DigitalPrint {
  #format;
  #paper;
  #print;

  constructor(costData) {
    this.#format = costData.format;
    this.#paper = costData.paper;
    this.#print = costData.print;
  }
  #getPrintedPagesCount(pages, format) {
    return pages * this.#format[format];
  }
  #getPrintedSheetsCount(pages, format, sides) {
    return Math.ceil((pages * this.#format[format]) / sides);
  }
  getPrice(state) {
    const { format, paper, print, sides, pages } = state;
    const printedPages = this.#getPrintedPagesCount(pages, format);
    const printedSheets = this.#getPrintedSheetsCount(pages, format, sides);
  }
}
