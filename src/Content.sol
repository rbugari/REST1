pragma solidity >=0.5.0 <0.6.0;

contract FixedContent{
    
    
    uint public elementCount;
    
    struct Content{
        string key;
        string xtype;
        string data;
        string hash;
        string tags;
        uint256 id;
     }
    
    mapping(bytes32 => Content) private contents;
    
    constructor () public {
        elementCount = 0;
    }


    function NewContent (
        string memory _key,
        string memory _xtype, 
        string memory _data,
        string memory _hash, 
        string memory _tags
        )  public {
            
        bytes32 kackey = keccak256(abi.encodePacked(_key));    
        Content storage _content = contents[kackey];
        _content.key = _key;
        _content.xtype =_xtype;
        _content.data = _data;
        _content.hash = _hash;
        _content.tags = _tags;
        _content.id = elementCount;
        elementCount += 1;
    }
    

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