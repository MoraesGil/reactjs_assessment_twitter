import React from 'react';
import SVG from 'react-inlinesvg';

const customIcon = `
     <svg
            xmlns:dc="http://purl.org/dc/elements/1.1/"
            xmlns:cc="http://creativecommons.org/ns#"
            xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
            xmlns:svg="http://www.w3.org/2000/svg"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
            xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="42"
            height="31"
            viewBox="0 0 845.0000000000005 627.9999999999995"
            enable-background="new 0 0 578 462"
            xml:space="preserve"
            inkscape:version="0.91 r13725"
            sodipodi:docname="Bird.svg"
        >
            <sodipodi:namedview
                pagecolor="#ffffff"
                bordercolor="#666666"
                borderopacity="1"
                objecttolerance="10"
                gridtolerance="10"
                guidetolerance="10"
                inkscape:pageopacity="0"
                inkscape:pageshadow="2"
                inkscape:window-width="1366"
                inkscape:window-height="705"
                id="namedview4"
                showgrid="false"
                borderlayer="true"
                inkscape:showpageshadow="false"
                inkscape:zoom="0.8837579617834395"
                inkscape:cx="422.5"
                inkscape:cy="314.0000000000001"
                inkscape:window-x="-8"
                inkscape:window-y="-8"
                inkscape:window-maximized="1"
                inkscape:current-layer="Layer_1"
                fit-margin-top="0"
                fit-margin-left="0"
                fit-margin-right="0"
                fit-margin-bottom="0"
                showguides="true"
                inkscape:guide-bbox="true"
            />
            <path
                style="fill:#c8967b"
                d="m 67.26941179210284,348.5169286867017 -0.82996843503959,-1.4830713132983 -17.46972167853154,-1.4986786938442 -17.46972167853167,-1.4986786938442 -5.75,-2.7021185988889 -5.75,-2.7021185988889 0,-4.1078134926205 2e-14,-4.1078134926206 5.48322383425233,-2.6892247765664 5.48322383425233,-2.6892247765665 18.26677616574768,-3.0793691609312 18.26677616574761,-3.0793691609312 14.48271009723902,1.1263194667219 14.66284025058333,1.3102760361496 37.15444535800714,22.7729668353926 7.1336642993142,16.2054948670176 7.1336642993142,16.2054948670175 4.9843426947233,8.6600612048907 4.9843426947232,8.6600612048908 3.9845254511153,19.7818276731084 5.5679231079885,28.839938795109 1.5833976568734,9.0581111220009 -0.6781882107754,8.2799059367804 -0.6781882107753,8.2799059367803 -4.7867378098217,2.4256236157189 -4.7867378098216,2.4256236157188 -5.3710019343438,-3.991888478817 -5.3710019343438,-3.991888478817 -0.713021668378,-1.7136410736821 -5.7743969351376,-20.810104430291 -5.0613752667597,-19.0964633566088 -9.3998974950112,-20.668039072403 -9.3998974950112,-20.6680390724029 -9.2276652662162,-10.0002045412907 -8.82570556985125,-10.37300604616 z"
                id="path5051"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="cccccccccccccccccccccccccccccccccccc"
            />
            <path
                style="fill:#00a1e7"
                d="m 439.7331541270436,605.9534386192431 -5.2331541270436,-2.6219346611313 -5.2197510036058,-2.7565229561819 -3.7134811895471,-16.2675576679799 -3.4937301859413,-16.0864079921713 -1.7217311078438,-3.6105076708892 -2.2865188104529,-3.5932271302521 -2.564787702609,2.8791248567735 -13,15.0630684946999 -11,12.2012241785643 -3.7101619327035,1.9196509646627 -4.1791021947134,1.9196509646622 -1.59502741935,-5.4243327860244 -1.1260871573403,-5.4243327860245 2.5254028093578,-4.9836425710273 12.0262316319221,-19.5517656340089 12.0637676663045,-19.6258394325338 2.56293884374,-5.0577163695516 -2.0655623238867,-35.3912502444109 -2.0655623238865,-35.3912502444115 -2.7894039975796,-6.8249349660037 -2.7894039975797,-6.8249349660035 -9.9290148021424,-0.8575332382086 -9.9290148021423,-0.8575332382086 -7.1332444699802,-1.7604084911021 -7.1332444699803,-1.7604084911023 -0.6520968636867,34.1179417293106 -1.6471987456994,63.6179417293104 -0.9951018820125,29.5 -0.9896723338912,8 -0.989672333891,8 -2.1508218153905,4.75 -2.1508218153903,4.75 -4.2171528859261,0 -4.2171528859263,0 -2.1221721956676,-8.75 -4.0438132012362,-22.0985701187909 -2.4402875606502,-13.8672166738711 -0.5186465550816,-0.5186465550798 -20.3592636514245,13.6824325789473 -20.3592636514242,13.6824325789474 -2.7303657145513,-1.2440378729417 -2.7303657145512,-1.2440378729417 0.667581783925,-3.0711780321345 1.4256608679396,-5.0850711984273 7.6225975892555,-10.2402033416898 6.8645185052413,-8.2263101753974 16,-11.6391041393197 16.2020869277767,-11.7952169194202 1.7784051740814,-42.0422873449104 1.5763182463047,-41.8861745648099 -0.7784051740814,-0.767547370857 -8.7784051740814,-3.7282648237832 -21,-8.5829893548351 -13,-5.6222719019091 -9.2924185520039,-9.2278684483877 -9.292418552004,-9.2278684483878 -9.5870211452793,-14.7902291850502 -9.5870211452795,-14.7902291850501 -4.94673455975,-13.2097708149499 -5.6818867982644,-13.9710973104979 -0.7351522385145,-0.7613264955479 -27.2471664222121,1.5516858996973 -27.2471664222122,1.5516858996975 -16.5449013707032,-3.6311198880755 -16.544901370703,-3.6311198880756 -10.5837078600215,-3.9262446757168 -10.5837078600214,-3.9262446757169 -3.6417303937997,2.9265743253809 -3.6417303937996,2.9265743253808 -19.9211674577156,9.9649023255197 -19.92116745771567,9.9649023255195 -17,6.1123943367453 -16.99999999999996,6.1123943367455 -7.3991272417531,1.0306735969024 -7.69833612845047,0.7314647102181 10.8991272417531,-13.4586927719038 25.19833612845046,-27.9827952729212 14,-14.8233113877013 14.68187503299974,-10.9855352653002 14.6818750329998,-10.9855352653002 0.7137266032528,-5.4931398911934 0.7137266032528,-5.4931398911933 4.2416584056359,-9.0068601088067 4.2416584056359,-9.0068601088066 15.8627399581114,-15.7148832760116 15.8627399581115,-15.7148832760113 17.2857756331145,-6.5030610956817 17.2857756331146,-6.5030610956817 13.0792349018023,-3.6056799467078 13.0792349018022,-3.6056799467079 30.0236412238011,-5.3983607736459 30.238649043716,-5.6763756815991 3.047185768951,-5.278014907953 20.2320356730398,-27.5 17.3998577240038,-22.5 25.6643047483274,-28.3172783194599 25.6643047483274,-28.31727831945999 21,-15.27060456798563 32,-22.63119929639355 11,-7.36059472840793 16.4294205936177,-7.30152238414656 16.4294205936178,-7.30152238414632 3.255479745208,0 5.6458156080011,0.90880407522047 2.3903358627932,0.90880407522048 1.6337226530588,2.49337592553036 1.6337226530588,2.49337592553024 -4.0024088195982,11.96465542204727 -4.002408819598,11.96465542204725 -10.0448946475311,14.38316457720191 -10.0448946475309,14.3831645772018 -10.8630471649333,11.00000000000011 -10.8630471649332,11 1.0203970004927,1.7845141859031 1.0203970004924,1.7845141859031 4.7852199160071,-3.5126742780164 4.7852199160072,-3.5126742780164 18.8957748608848,-6.5877159718543 18.8957748608851,-6.58771597185442 18.3006703429612,-4.43412393603239 18.3006703429609,-4.43412393603239 6.2531628733658,0 6.2531628733658,0 3.2745778519935,3.37850693466599 3.2745778519942,3.37850693466602 -2.7082778477376,5.37149306533409 -2.7082778477371,5.371493065334 -10.0821678612267,13 -17.6201332205842,20.8604223052798 -7.5379653593557,7.8604223052799 8.9999999999997,-0.5906912524459 20,-1.1914481661775 11,-0.6007569137315 22.5,1.0813686622557 28.2816408230177,1.6828850649936 5.7816408230184,0.601516402738 1.9472142882513,3.8168553226465 1.9472142882513,3.8168553226464 -4.3299706339493,5.8312854732575 -4.3299706339484,5.8312854732576 -14.3091101007154,13.488319593954 -14.3091101007158,13.4883195939541 2.9102256233947,0.7238134487757 48.5508844626786,5.2736416253388 45.6406588392839,4.5498281765631 78.2770982346259,17.48912918795 78.5856416134136,17.7976725667377 -19.0428097160899,46.2489095927571 -29.8389061087131,68.9403662139694 -19.1745445614763,40.3379565713811 -8.6869915476403,17.337956571381 -1.2004027963435,-0.442587232865 -34.2004027963434,-10.5470464461913 -57.5,-17.5104054885816 -24.7210149452858,-7.2365618465737 5.7998870931198,48.1150361500655 6.0209020384054,47.9456517213838 -0.6350425659516,4.6868713649948 -0.6350425659515,4.6868713649946 -5.1648445271685,3.5569673188235 -5.1648445271678,3.5569673188236 -7.2900099534306,-2.063159081462 -7.290009953431,-2.0631590814622 -12.209990046569,-5.8030835183856 -12.2099900465694,-5.8030835183855 -14.5,-12.5635168346105 -21.5819999525262,-19.0755354674531 -7.0819999525255,-6.5120186328427 2.8267520029085,14.6979393834824 2.8267520029082,14.6979393834825 -0.00138313233,9.5 -0.00138313233,9.5 -1.9680703997193,11.5 -1.9680703997194,11.5 -1.6531592613984,3.696747352445 -1.6531592613992,3.6967473524453 -3.1054414702329,1.082562726703 -3.1054414702321,1.0825627267033 -10.5166977867017,-7.1623070667995 -10.5166977867012,-7.1623070667993 -13.8675304989887,-13.6170030123489 -13.8675304989885,-13.6170030123489 -3.5505289725694,-7.5 -3.5505289725692,-7.5 -5.703715555727,22.7202327054766 -5.7037155557272,22.7202327054765 -2.2410555951613,5.5216053529178 -2.2410555951613,5.521605352918 -3.8559720983495,1.0383054597961 -3.8559720983496,1.038305459796 -5.7811972792041,-2.9274420620782 -5.7811972792041,-2.9274420620781 -8,-6.1999691562198 -8,-6.1999691562202 -0.6380704002493,9.3472677001075 -0.75,16.9846982937927 -0.1119295997507,7.6374305936851 4.9240156066672,11.6444146552273 4.9240156066672,11.644414655227 1.5759843933328,12.9265502458207 1.5759843933328,17.5013984812762 0,4.5748482354558 -2.5168458729564,4.9667562698113 z"
                id="path5047"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc"
            />
            <path
                style="fill:#ffffff"
                d="m 226,317.8987136518362 4.5,0.077548597391 5,-1.3323569128023 8,-2.8876430427837 7.5327064805435,-5.5494915258421 4.5327064805434,-3.9942053958607 2.9653941683254,-5.8562826859691 2.9653941683254,-5.8562826859691 -0.015900392262,-8 -0.015900392262,-8 -2.4213810315434,-4.9565196805398 -2.4213810315435,-4.9565196805399 -3.4771757425967,-3.8488178926077 -3.4771757425968,-3.8488178926079 -4.3196498290591,-2.5314834069524 -4.3196498290591,-2.5314834069526 -5.2639936534079,-1.4013101445134 -5.2639936534079,-1.4013101445133 -4,0 -4,0 -5,1.3323569128023 -8,2.8876430427836 -7.5327064805435,5.5494915258422 -4.5327064805436,3.9942053958608 -2.9672935194564,5.856282685969 -2.9672935194565,5.856282685969 0.012744854699,8.0167207728693 0.012744854699,8.0167207728691 2.9545486647574,5.8395619130998 2.9545486647575,5.8395619130997 4.5327064805434,3.9942053958608 7.5327064805435,5.5554291536349 7.5,2.8100944453929 4.5,1.2488706876186 z"
                id="path5021"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="ccccccccccccccccccccccccccccccccccc"
            />
            <path
                style="fill:#c8967b"
                d="m 226.3598628053419,294 -2.0112347519229,0 -2.1743140267095,-2.3144512213676 -2.1743140267095,-2.3144512213676 0,-2.011234751923 0,-2.0112347519229 2.3144512213676,-2.1743140267097 2.3144512213676,-2.1743140267095 2.0112347519229,0 2.0112347519229,0 2.1743140267095,2.3144512213676 2.1743140267095,2.3144512213677 0,2.0112347519229 0,2.011234751923 -2.3144512213676,2.1743140267097 -2.3144512213676,2.1743140267094 z"
                id="path5023"
                inkscape:connector-curvature="0"
                sodipodi:nodetypes="ccccccccccccccccc"
            />
            <path
                inkscape:connector-curvature="0"
                id="path5025"
                d="m 56.5,370.6229523323498 -2,0.5781707983348 3.5,-3.5366085395024 34,-30.5974460404663 30.5,-27.0608375009638 1.581345369818,-0.00311552488 1.5813453698181,-0.00311552488 6.4969101424126,7.25 9.6755557462444,10.8898749453543 3.1786456038318,3.6398749453544 -13.2569011160625,7.5777620548138 -13.2569011160624,7.5777620548137 -18.273610203358,7.9779917809948 -18.27361020335796,7.9779917809949 -11.72638979664201,3.5767619858446 z"
                style="fill:#fef100"
                sodipodi:nodetypes="cccccccccccccccc"
            />
        </svg>
    `;

export const CustomIcon: React.FC = () => {
    return <SVG src={customIcon} />;
};