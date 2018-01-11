import React from "react";

export default Component => class Accordion extends React.Component {

  state = {
    openItemId: null
  }

  toggleOpenItem = OpenItemId => ev => {
    this.setState({
      openItemId: OpenItemId === this.state.openItemId ? null : OpenItemId
    });
  }

  render() {
    return(
      <Component {...this.props} toggleOpenItem={this.toggleOpenItem} openItemId={this.state.openItemId} />
    );
  }

}