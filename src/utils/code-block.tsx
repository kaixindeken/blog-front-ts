import React, {Requireable, Validator} from "react";
import hljs from 'highlight.js'
import PropTypes from 'prop-types'

interface Props {
    language?: any
    value?: any
}

class CodeBlock extends React.PureComponent<Props> {

    private codeEl: any;
    static defaultProps: { language: string };
    static propTypes: { language: Requireable<string>; value: Validator<NonNullable<string>> };

    constructor(props: any) {
        super(props)
        this.setRef = this.setRef.bind(this)
    }

    setRef(el: any) {
        this.codeEl = el
    }

    componentDidMount() {
        hljs.highlightBlock(this.codeEl)
    }

    componentDidUpdate() {
        hljs.highlightBlock(this.codeEl)
    }

    render() {
        return (
            <pre>
                <code
                    ref={this.setRef}
                    className={`language-${this.props.language === null ? 'bash': this.props.language}`}
                    style={{background: "#eee",borderRadius: 4}}
                >
                    {this.props.value}
                </code>
        </pre>
    )
    }
}

CodeBlock.defaultProps = {
    language: ''
}

CodeBlock.propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
}

export default CodeBlock;
