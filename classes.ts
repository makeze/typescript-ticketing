class Blockchain {
    constructor(public walledId: string) {
    }

    public createWallet(): string {
        console.log(`Wallet  created.`);
        return '2f261be159cf5cf47812ae91f21a95';
    }

    public mine(walletId: string): void {
        console.log(`Mining for ${walletId}.`);
    }
}

class ChainLink extends Blockchain {
    constructor(public blocksize: number, walletId: string) {
        super(walletId);
    }

    mine(walletId: string): void {
        console.log(`Minting into ${walletId}.`);
    }
}

const chainLink = new ChainLink(64, '2f261be159cf5cf47812ae91f21a95');

let walletId = chainLink.createWallet();
chainLink.mine(walletId);