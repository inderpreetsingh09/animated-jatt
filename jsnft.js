/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// Step 1: Create a variable to hold your NFTs
let nftCollection = [];

// Step 2: This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(name, eyeColor, shirtType, bling, backgroundColor, rarity, attributes) {
    const nft = {
        name: name,
        eyeColor: eyeColor,
        shirtType: shirtType,
        bling: bling,
        backgroundColor: backgroundColor,
        rarity: rarity,
        attributes: attributes
    };
    nftCollection.push(nft);
}

// Step 3: Create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    nftCollection.forEach((nft, index) => {
        console.log(`NFT #${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Eye Color: ${nft.eyeColor}`);
        console.log(`Shirt Type: ${nft.shirtType}`);
        console.log(`Bling: ${nft.bling}`);
        console.log(`Background Color: ${nft.backgroundColor}`);
        console.log(`Rarity: ${nft.rarity}`);
        console.log(`Attributes:`);
        Object.keys(nft.attributes).forEach(attr => {
            console.log(`  ${attr}: ${nft.attributes[attr]}`);
        });
        console.log('---');
    });
}

// Step 4: Print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length;
}

// Call your functions below this line

// Mint some NFTs
mintNFT("Epic Dragon", "Red", "Armor", "Gold Chain", "Fire", "Legendary", {strength: 100, speed: 80});
mintNFT("Cool Cat", "Green", "T-Shirt", "Silver Necklace", "Jungle", "Rare", {agility: 90, charm: 70});
mintNFT("Mystic Wolf", "Blue", "Hoodie", "Diamond Earring", "Night Sky", "Epic", {stealth: 95, intelligence: 85});
mintNFT("Funky Monkey", "Brown", "Tank Top", "Ruby Ring", "Tropical", "Uncommon", {playfulness: 88, dexterity: 77});
mintNFT("Space Pirate", "Black", "Space Suit", "Emerald Pendant", "Galaxy", "Ultra Rare", {strategy: 92, bravery: 89});

// List all NFTs
listNFTs();

// Print the total number of NFTs minted
console.log("Total Supply of NFTs: " + getTotalSupply());
