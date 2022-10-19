import { Component } from 'react';
import { Controls } from './Controls';
import { Progress } from './Progress';
import { Publication } from './Publication';

const LS_KEY = 'reader_item_index';

export class Reader extends Component {
  state = {
    index: 0,
  };

  changeIndex = value => {
    this.setState(state => ({ index: state.index + value }));
  };

  componentDidMount() {
    const savedState = Number(localStorage.getItem(LS_KEY));
    if (savedState) {
      this.setState({ index: Number(savedState) });
    }
  }

  componentDidUpdate(_, prevState) {
    //prevProps, prevState
    if (prevState.index !== this.state.index) {
      localStorage.setItem(LS_KEY, this.state.index);
    }
  }

  render() {
    const { index } = this.state;
    const { items } = this.props;
    const totalItems = items.length;
    const currentItem = items[index];

    return (
      <>
        <Controls
          currentItem={index + 1}
          totalItems={totalItems}
          onChange={this.changeIndex}
        />
        <Progress current={index + 1} total={totalItems} />
        <Publication items={currentItem} />
      </>
    );
  }
}

// work with localStorage:
//#1
//   componentDidMount() {
//       const savedIndex = Number(savedState); //or rename to 'index'
//       this.setState({ index: savedIndex }); //so here will be only ({index})
//     // console.log('savedIndex', savedIndex); //null == 0
//   }

// #2
// on First Visit:
// check:
//   componentDidMount() {
//     const savedState = Number(localStorage.getItem(LS_KEY)); // string
//     if (savedState) {
//       const index = Number(savedState);
//       this.setState({ index });
//     }
//   }

// #3
//   componentDidMount() {
//     const savedState = Number(localStorage.getItem(LS_KEY));
//     if (savedState) {
//       this.setState({ index: Number(savedState) });
//     }
//   }
