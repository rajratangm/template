/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                
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
