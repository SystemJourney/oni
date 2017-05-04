import * as React from "react"

import { AutoCompletionContainer } from "./components/AutoCompletion"
import { Background } from "./components/Background"
import { Cursor } from "./components/Cursor"
import { CursorLine } from "./components/CursorLine"
import { EditorHost } from "./components/EditorHost"
import { Logs } from "./components/Logs"
import { MenuContainer } from "./components/Menu"
import { QuickInfoContainer, SignatureHelpContainer } from "./components/QuickInfo"
import { StatusBar } from "./components/StatusBar"

import { IEditor } from "./../Editor/Editor"

interface IRootComponentProps {
    editor: IEditor
}

export class RootComponent extends React.Component<IRootComponentProps, void> {
    public render() {

        return <div className="container full">
            <div className="layer">
                <Background />
            </div>
            <div className="layer">
                <div className="container vertical full">
                    <div className="container full">
                        <EditorHost editor={this.props.editor} />
                        <Cursor />
                        <CursorLine lineType={"line"} />
                        <CursorLine lineType={"column"} />
                        <SignatureHelpContainer />
                        <QuickInfoContainer />
                        <SignatureHelpContainer />
                        <AutoCompletionContainer />
                        <Logs />
                    </div>
                    <div className="container fixed">
                        <StatusBar />
                    </div>
                </div>
            </div>
            <div className="layer">
                <MenuContainer />
            </div>
        </div>
    }
}
