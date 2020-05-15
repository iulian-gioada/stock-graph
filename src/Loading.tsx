import React from 'react';

const Loading: React.FC<{symbol: string}> = ({symbol}: {symbol: string}) => (
    <div>Loading data for {symbol}</div>
)

export default Loading