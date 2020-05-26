import React, { Fragment } from 'react';
import { Paragraph } from 'grommet'
import Spinner from './Spinner'

const Loading: React.FC<{ symbol: string }> = ({ symbol }: { symbol: string }) => (
    <Fragment>
        <Paragraph margin={"medium"}>Loading data for {symbol}</Paragraph>
        <Spinner />
    </Fragment>
)

export default Loading