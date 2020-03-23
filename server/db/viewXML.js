export function viewXML({ id, position, vast_url, height, width }) {
    return `<VAST version="2.0">
        <Ad>
            <InLine>
                <AdSystem>2.0</AdSystem>
                <Impression/>
                <Creatives>
                <Creative>
                <Linear>
                    <MediaFiles>
                        <MediaFile type="application/javascript" apiFramework="VPAID" height="${height}" width="${width}" delivery="progressive">
                        <![CDATA[
                        https://cheq.com/vpaid.js?vast=${vast_url}&position=${position}&vastId="${id}"
                        ]]>
                        </MediaFile>
                    </MediaFiles>
                </Linear>
                </Creative>
                </Creatives>
            </InLine>
        </Ad>
    </VAST>`;
}
