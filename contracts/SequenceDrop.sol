import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SequenceDrop is ERC1155, Ownable {

    constructor() public ERC1155("https://bafybeie2pni4xma557fouywxhchhehpzydjhvj2lv6wjbn5b2jiuighqkm.ipfs.nftstorage.link/{id}.json") {
        _mint(address(this), 0, 10000, "");
        _mint(address(this), 1, 10000, "");
        _mint(address(this), 2, 10000, "");
        _mint(address(this), 3, 10000, "");
        // ...
    }

    function claim(address contractAddress_, address address_, uint type_) public {
        IERC1155(contractAddress_).safeTransferFrom(address(this), address_, type_, 1, "");
    }
}