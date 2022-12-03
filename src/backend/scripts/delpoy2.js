async function main() {
    const [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    const toWei = (num) => ethers.utils.parseEther(num.toString())
    let royaltyFee = toWei(0.01);
    let prices = [toWei(1), toWei(2), toWei(3), toWei(4), toWei(5), toWei(6), toWei(7), toWei(8)]
    let deploymentFees = toWei(prices.length * 0.01)
    console.log("Deploying contracts with the account:", deployer.address);
    console.log("Account balance:", (await deployer.getBalance()).toString());
    // Deployment steps SatoshiCity
    const NFTMarketplaceFactory = await ethers.getContractFactory("MusicNFTMarketplace");
    nftMarketplace = await NFTMarketplaceFactory.deploy(
        royaltyFee,
        artist.address,
        prices,
        { value: deploymentFees }
    );


}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });