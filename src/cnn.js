import NeuralNetwork from './neural-network';
import Convolution from './utilities/convolution';

export default class CNN extends NeuralNetwork {
  /**
   *
   * @param input
   * @returns {*}
   */
  runInput(input) {
    throw new Error('not yet implemented');
    this.outputs[0] = input;  // set output state of input layer

    let output = null;
    for (let layer = 1; layer <= this.outputLayer; layer++) {
      for (let node = 0; node < this.sizes[layer]; node++) {
        let weights = this.weights[layer][node];
        //TODO: CNN logic here
        this.outputs[layer][node] = convol;
      }
      output = input = this.outputs[layer];
    }
    return output;
  }
}