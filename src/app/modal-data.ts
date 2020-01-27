export class ModalData {
  code: string;
  classTitle: string;

  public getCode(): string {
    return this.code;
  }

  public setCode(code$: string) {
    this.code = code$;
  }

  public getClassTitle(): string {
    return this.classTitle;
  }

  public setClassTitle(classTitle$: string) {
    this.classTitle = classTitle$;
  }
}
