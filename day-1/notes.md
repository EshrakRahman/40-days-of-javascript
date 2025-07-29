# Revision update 
Practicing Git Branch and merge using day o1 files.
## things to remember 
-- always prefer do create a seperate files of js
# defer and async
-- so the when we build an website and host it on server and try to visit it the things that happen acutllliy is 
    -- first the browser download the html file and build the DOM 
    -- then it download the script file 
    -- then it execute the script 

-- now the problem with this is if we put scrpit file in head tag then the browser start downlodainf the html file and building the dom when it see a script tag it start downloading it and exicuting it. now if the script file has anything to do with our body part then it can't exicute the code as the body hasn't been initialized in the dom tree . 