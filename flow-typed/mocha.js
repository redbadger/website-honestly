type Case = (done: any) => void;

declare function describe(name: string, test: Case): boolean;
declare function it(name: string, test: Case): boolean;
