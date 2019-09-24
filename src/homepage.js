import React,{Component} from 'react';
import SideDrawer from './components/sideDrawer/SideDrawer';
import Toolbar from './components/toolbar/Toolbar';
import BackDrop from './components/backDrop/BackDrop';

class App extends Component{
  state = {
    sideDrawerOpen: false
  };
  drawerToggleClickHandler = () => {
   
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };
  backDropClickHandler = () => {
      this.setState({sideDrawerOpen : false});
  };
  render() {
    let sideDrawer;
    let backDrop;

    if(this.state.sideDrawerOpen) {
      backDrop= <BackDrop click= {this.backDropClickHandler}/>;
    }
    return(
      <div style = {{ height: '100%' }}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backDrop}
        <main style={{marginTop: '64px'}}>
       </main>
      </div>
    );
  }
}

export default App;
