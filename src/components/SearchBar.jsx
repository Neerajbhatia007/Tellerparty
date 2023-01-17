import { Container, Text, VStack , Input, IconButton, HStack} from '@chakra-ui/react';
import { BiSearchAlt2 } from 'react-icons/bi';
import React from 'react';

class SearchBar extends React.Component {
  handleChange = event => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };

  render() {
    return (
      <>
        {/* <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src='https://www.thatitguy.net/wp-content/uploads/2018/08/1280px-Logo_of_YouTube_2015-2017.svg.png' alt="youtube logo"></img></h2> */}
        <Container>
          <form onSubmit={this.handleSubmit}>
            <VStack
              alignItems={'stretch'}
              spacing={'8'}
              w={['full', '96']}
              m={'auto'}
              my={'16'}
            >
                {/* <Text htmlFor="video-search">Video Search</Text> */}
                {/* <label htmlFor="video-search">Video Search</label> */}
                {/* <input
                  onChange={this.handleChange}
                  name="video-search"
                  type="text"
                  placeholder="Search.."
                /> */}
                <HStack>
                <Input
                onChange={this.handleChange}
            placeholder="Search..."
            type={'text'}
            name={'video-search'}
            focusBorderColor={'orange.400'}
          />
          <IconButton type='submit' onChange={this.handleChange} sx={{ p: '10px', color: 'orange' }} aria-label='search'>
        <BiSearchAlt2 />
      </IconButton>
      </HStack>
            </VStack>
          </form>
        </Container>
      </>
    );
  }
}
export default SearchBar;
