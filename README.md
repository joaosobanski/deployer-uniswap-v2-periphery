# Deploy contracts of Uniswap V2 on mumbai
- [Uniswap Factory](https://mumbai.polygonscan.com/address/0xB980Fa931d00E334e13f630Be349C8F65098C9F0) – Uniswap Factory.
- [Uniswap WETH](https://mumbai.polygonscan.com/address/0x7f17088DB5a2e455a22AFa3D2aFBe00b5e95F4dE) – Uniswap WETH.
- [Uniswap Router](https://mumbai.polygonscan.com/address/0x349Ac8CDE4e7736D1daaf2E38F3FF26059100621) – Uniswap Router.
- [Uniswap Multicall](https://mumbai.polygonscan.com/address/0x925460c8ce98d1F5EF99c0f6006ECeb00c615e4F) – Uniswap Multicall.


This is a Hardhat setup to deploy the necessary contracts of Uniswap.
## Generate an account and Get test tokens

## Get Started

Install packages:
```
npm i
```

Modify the private keys as you wish in the `hardhat.config.js` file.

Deploy the contracts (mumbai):
```
npx hardhat run --network mumbai scripts/deploy-uniswap.js
npx hardhat run --network fuji scripts/deploy-uniswap.js
```

mumbai
WETH deployed to : 0x7f17088DB5a2e455a22AFa3D2aFBe00b5e95F4dE
Factory deployed to : 0xB980Fa931d00E334e13f630Be349C8F65098C9F0
Router V02 deployed to :  0x349Ac8CDE4e7736D1daaf2E38F3FF26059100621
Multicall deployed to : 0x925460c8ce98d1F5EF99c0f6006ECeb00c615e4F

Token1 deployed to : 0x8Aa19fe52C17DE4ebEdb3A3ab8D003Da2275ECc3
Token2 deployed to : 0x4240d0726235ADd588eEaD9fA4bCd7579935475b


```
npx hardhat verify --contract "contracts/Token.sol:Token" --network mumbai 0xeb0e5750EEDED5B943097e9E2A148AF7318Ce5Ae

npx hardhat verify --contract "contracts/WETH.sol:WETH" --network mumbai 0xDaAC615dfD49824095Cc6C213b2A34032b949614

npx hardhat verify --contract "contracts/core/UniswapV2Factory.sol:UniswapV2Factory" --network mumbai 0x9298858288EA36fBAb9b410f9aED04C817e84882

npx hardhat verify --contract "contracts/periphery/UniswapV2Router02.sol:UniswapV2Router02" --network mumbai 0x349Ac8CDE4e7736D1daaf2E38F3FF26059100621

npx hardhat verify --contract "contracts/Multicall.sol:Multicall" --network mumbai 0x925460c8ce98d1F5EF99c0f6006ECeb00c615e4F

```
