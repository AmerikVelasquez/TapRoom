import React from 'react';
import TapDetail from './TapDetail';
import NewTapForm from './NewTapForm';
import TapList from './TapList';

class TapControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainTapList : [],
      selectedTap: null
    };
  }

  handleClick = () => {
    if(this.state.selectedTap != null){
      this.setState({
        formVisibleOnPage: false,
        selectedTap: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewTapToList = (newTap) =>{
    const newMainTapList = this.state.mainTapList.concat(newTap);
    this.setState({mainTapList: newMainTapList,
      formVisibleOnPage: false});
  }

  handleChangingSelectedTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0];
    this.setState({selectedTap: selectedTap});
  }

  handleDecreasingTap = (id) => {
    const selectedTap = this.state.mainTapList.filter(tap => tap.id === id)[0]
    if(this.state.selectedTap.pints>0){
      selectedTap.pints --;
      const newMainTapList = this.state.mainTapList.filter(tap => tap.id !== id).concat(selectedTap);
      this.setState({
        mainTapList: newMainTapList
      });
    } 
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if(this.state.selectedTap != null){
      currentlyVisibleState = <TapDetail
      tap = {this.state.selectedTap}
      onClickingDecrease = {this.handleDecreasingTap}/>
      buttonText = "Return to Tap List"
    } 
    else if (this.state.formVisibleOnPage){
      currentlyVisibleState = <NewTapForm onNewTapCreation={this.handleAddingNewTapToList}/>
      buttonText = "Return to Tap List";
    } else {
      currentlyVisibleState = <TapList tapList = {this.state.mainTapList} onTapSelection = {this.handleChangingSelectedTap}/>
      buttonText = "add Tap";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default TapControl;
