import React, {Component} from 'react';
import { Form } from 'formsy-react';






import AlertContainer from 'react-alert';

class Forms extends Component {
    constructor(props){

    super(props);
    this.alertOptions = {
      offset: 50,
      position: 'top right',
      theme: 'dark',
      time: 0,
      transition: 'scale'
    };

    //var transitionTo = Router.transitionTo;
    this.state = {canSubmit : true};

  }


  submit(data) {
    console.log(data);
    // alert(JSON.stringify(data, null, 4));
     this.msg.show('Privacy Policy has been updated successfully', {
      type: 'success',
      time: 3000,
    });

  }

  enableButton() {
    this.setState({ canSubmit: true });
  }

  disableButton() {
    this.setState({ canSubmit: false });
  }


  render() {
    return (
            <div className="animated fadeIn">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <strong>Privacy Policy</strong>
                            </div>
                            <div className="card-block">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Form onSubmit={this.submit.bind(this)} onValid={this.enableButton.bind(this)} onInvalid={this.disableButton.bind(this)} className="mt-1" encType="multipart/form-data" method="post">

                                        <div className="form-group row">
                                          <div className="col-md-12">
                                            <textarea
                                              name='description'
                                              rows="20"
                                              defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ultricies sem id mollis hendrerit. Nulla faucibus elementum risus, nec eleifend libero tincidunt id. Nam velit urna, viverra in nibh eu, pellentesque consequat augue. Praesent luctus, leo ac imperdiet dapibus, nisi elit tristique felis, eget vestibulum velit dui vel est. Curabitur molestie nibh quam, nec maximus ante vehicula id. Ut laoreet et dolor at suscipit. Morbi pellentesque sed ante at bibendum. Nulla ut mattis enim, iaculis tincidunt nisl. Morbi at nisi vel elit eleifend auctor vel ac felis.

  Nam sit amet augue diam. Aliquam eget finibus justo. Phasellus eget interdum sem, eu vulputate ante. Quisque at eros nunc. Ut quis viverra magna. Sed eget nunc porttitor, tempor lacus at, convallis mauris. Vivamus mattis urna in ex vulputate finibus. Aenean tempus pretium libero, vitae interdum ante varius aliquam. Maecenas congue, lacus et ultrices euismod, dui tellus dictum dui, ac volutpat turpis nibh ac massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin et tincidunt nulla, eget pretium diam.

  Nulla facilisi. Morbi dui quam, lobortis id turpis quis, efficitur rhoncus augue. Proin in ipsum orci. Donec consequat magna tellus, quis accumsan orci finibus sed. Nam fringilla leo vitae mi eleifend varius. In vestibulum cursus nunc ac lacinia. Fusce tincidunt est id justo ultricies, sit amet varius risus efficitur. Phasellus ac lacinia lacus, ac cursus libero. Aliquam erat volutpat. In hac habitasse platea dictumst. Cras lobortis sit amet lectus vitae porttitor. Nulla rhoncus tortor at nulla tincidunt, eu mattis ligula commodo. Nam nec malesuada est. Curabitur nec neque pulvinar, dignissim ligula in, hendrerit ligula.

  Nullam leo felis, cursus ut enim vel, porta rhoncus eros. Donec a eleifend odio. Vivamus auctor, lacus blandit rhoncus consequat, orci orci dapibus metus, quis sodales mi ex a mi. Sed eget sollicitudin quam. Phasellus nulla odio, gravida eget lorem ac, luctus rutrum augue. In vitae ex metus. Curabitur posuere luctus maximus. Donec sagittis malesuada velit, vel imperdiet lectus faucibus ac. Morbi convallis, quam a lobortis mollis, ex lorem cursus felis, in dapibus neque mi non enim. Quisque commodo sed massa id rhoncus.

  Aliquam non aliquet libero. Quisque interdum convallis lectus, ac posuere sem rhoncus quis. Nulla facilisi. Vestibulum sollicitudin feugiat efficitur. Praesent pharetra est at ullamcorper tristique. Proin vitae fermentum arcu. Morbi scelerisque lectus vel gravida porttitor. Nam et interdum tellus. Aenean a eros sit amet nisi pellentesque consectetur in sit amet nulla. Vestibulum quis ex odio. Duis sed nisi vel mi imperdiet maximus. Nulla facilisi."
                                              className="form-control"></textarea>

                                          </div>
                                        </div>

                                            <div className="form-group row">
                                                <div className="col-md-12">
                                                    <button type="submit" className="btn btn-md btn-primary mr-1" disabled={!this.state.canSubmit}><i className="fa fa-dot-circle-o"></i> Update</button>
                                                    <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />

                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forms;
