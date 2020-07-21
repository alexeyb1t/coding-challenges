export class RestoreIpAddress {
  static restoreIpAddress(ipAddress: string): string[] {
    const result: string[] = [];

    if (ipAddress === null || ipAddress.length < 4 || ipAddress.length > 12) {
      return result;
    }

    this.dfs(ipAddress, '', 0, result);
    return result;
  }

  private static dfs(ipAddress: string, sub: string, index: number, result: string[]) {
    // base case check
    if (index === 4 || ipAddress.length === 0) {
      if (index === 4 && ipAddress.length === 0) {
        result.push(sub.substr(0, sub.length - 1));
      }
      return;
    }

    // case 1: choose 1 digit
    this.dfs(ipAddress.substr(1), sub + ipAddress.substr(0, 1) + '.', index + 1, result);
    // case 2: choose 2 digits
    if (ipAddress.length > 1 && ipAddress[0] !== '0') {
      this.dfs(ipAddress.substr(2), sub + ipAddress.substr(0, 2) + '.', index + 1, result);
      // case 3: choose 3 digits
      if (ipAddress.length > 2 && parseInt(ipAddress.substr(0, 3)) <= 255) {
        this.dfs(ipAddress.substr(3), sub + ipAddress.substr(0, 3) + '.', index + 1, result);
      }
    }
  }
}
