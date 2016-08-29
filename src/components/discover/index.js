import React, { Component } from 'react';
import DiscoverCarousel from './discoverCarousel';
import DiscoverList from './discoverList';
import SimpEditor from './PostArticle';
import EssenceBox from './essenceBox';
import Topics from '../common/topics';

const styles = {
  wapper:{
    width: '1000px',
    margin: 'auto',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
  main: {
    width: '650px',
    display: 'inline-block',
    position: 'relative',
  },
  side: {
    width: '350px',
    display: 'inline-block',
    position: 'absolute',
  },
  CarouselWapper: {
    width: '100%',
    backgroundColor: '#3f3f3f',
  }
}

class Discover extends Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    window.addEventListener('scroll', function () {
      var sidebar = document.getElementById('side');
      if ( document.body.scrollTop > 470) {
        sidebar.style.position = 'fixed';
        sidebar.style.top = '30px';
      } else {
        sidebar.style.position = 'absolute';
        sidebar.style.top = null;
      }
    })
  }

  render(){
    return(
      <div>
        <div style={styles.CarouselWapper}>
          <DiscoverCarousel />
        </div>
        <div style={styles.wapper}>
          <div style={styles.main}>
            <DiscoverList NumPerPage={6} />
          </div>
          <div style={styles.side} id="side">
            <div style={{marginBottom: '30px'}}>
              <Topics />
            </div>
            <EssenceBox />
          </div>
        </div>
      </div>
    )
  }
}

module.exports = Discover
