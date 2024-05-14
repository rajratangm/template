/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                
            }
        ]
    }
    experimental:{
        serverActions:{
            bodySizeLimit:'20mb'
        }

    }
 
};

export default nextConfig;
