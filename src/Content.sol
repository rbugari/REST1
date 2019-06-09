pragma solidity >=0.5.0 <0.6.0;

contract FixedContent{
    
    // Track quantity of elemments
    uint public elementCount;
    
    // main struct Content
    struct Content{
        string key;
        string xtype;
        string data;
        string hash;
        string tags;
        uint256 id;
        bool used;
     }
    //struct EntityStruct {
    //    string entityData;
    //    bool isEntity;
    //}
    
    //Main mapping
    mapping(bytes32 => Content) private contents;

    //mapping (address => EntityStruct) private entityStructs;

    //function isEntity(address entityAddress) public view returns(bool isIndeed) {
    //    return entityStructs[entityAddress].isEntity;
    //}
 
    
    constructor () public {
        elementCount = 0;
    }


    // Add new Content
    function NewContent (
        string memory _key,
        string memory _xtype, 
        string memory _data,
        string memory _hash, 
        string memory _tags
        )  public {
        require(!ifExist(_key));    
        // calculate hash for string key    
        bytes32 kackey = keccak256(abi.encodePacked(_key));    
        Content storage 
        _content = contents[kackey];
        _content.key = _key;
        _content.xtype =_xtype;
        _content.data = _data;
        _content.hash = _hash;
        _content.tags = _tags;
        _content.used = true;
        _content.id = elementCount;
        elementCount += 1;
    }
    
    // get content for a given key
    function ifExist (string memory _key) public view  returns (
        bool _used
        ) 
    {
        bytes32 kackey = keccak256(abi.encodePacked(_key));    
        Content memory _content = contents[kackey];
        return (_content.used);
    }
    
    // get content for a given key
    function GetContent (string memory _key) public view  returns (
        string memory _xtype,
        string memory _data,
        string memory _hash,
        string memory _tags
        ) 
    {
        bytes32 kackey = keccak256(abi.encodePacked(_key));    
        Content memory _content = contents[kackey];
        return ( 
            _content.xtype,
            _content.data,
            _content.hash,
            _content.tags);
        
    }
    
}