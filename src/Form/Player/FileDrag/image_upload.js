import React from 'react';
import './DragDrop.css';

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    Submit(e) {
        e.preventDefault();
        console.log('uploading-', this.state.file);
    }

    ImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    render() {
        let {imagePreviewUrl} = this.state;
        let _imagePreview = null;
        if (imagePreviewUrl) {
            _imagePreview = (<img role="presentation" src={imagePreviewUrl} />);
        } else {
            _imagePreview = (<div className="previewText">select an Image</div>);
        }

        return (
            <div className="previewComponent">
                <form onSubmit={(e) => this.Submit(e)}>
                    <div className="row">
                        <div className="col-md-6">
                            <input type="file" onChange={(e) => this.ImageChange(e)} />
                        </div>
                        <div className="col-md-6">
                            <button type="submit" onClick={(e) => this.Submit(e)}>Console Print</button>
                        </div>
                    </div>
                </form>
                <div className="imgPreview">
                    {_imagePreview}
                </div>
            </div>
        )
    }
}

export default ImageUpload;