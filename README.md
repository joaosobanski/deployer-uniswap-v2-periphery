# Deploy contracts of Uniswap V2

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
```

npx hardhat verify 0xf8863211CcCF62E919E797E955fFb6f094f3dbe5 --network mumbai  

npx hardhat verify 0xe284824fA5ADff533Ef7aB4618418cd8c4A95901 --network mumbai "0xc65906ab0f1ed4e65caf5cc71dea574f3a520e33" 

npx hardhat verify 0xeF10929e713c0dC382920162629dCc119432922d --network mumbai "0xe284824fA5ADff533Ef7aB4618418cd8c4A95901" "0xf8863211CcCF62E919E797E955fFb6f094f3dbe5"

npx hardhat verify 0x514030e9753bFE65E44B73BbbCD4d7bf3dB663EF --network mumbai  

npx hardhat verify 0xc8cF43bf7cF97cCb41296504E9cC92eAffE9058e --network mumbai  'Token1' 'TOK1'

npx hardhat verify 0x71e83F737A42fd968d5Ea4aaf6aAe2bafD06A00c --network mumbai  'Token2' 'TOK2'

Contracts will be deployed and verify if node is running.