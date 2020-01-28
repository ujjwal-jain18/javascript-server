let match: boolean;
function validateEmail(a: string): boolean {
  const re: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((successive.tech))$/;

  match = re.test(a);

  return match;
}
export { validateEmail };
