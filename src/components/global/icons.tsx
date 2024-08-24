import { LucideProps } from "lucide-react";

type IconType = {
    [key: string]: (props: LucideProps) => JSX.Element;
};

const Icons: IconType = {
    icon: (props: LucideProps) => (
        <svg {...props} width="196" height="196" viewBox="0 0 196 196" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M73.9216 7.17157V38.2486C73.9216 38.519 74.0311 38.7779 74.2251 38.9662L90.3396 54.6067C90.7128 54.969 91.2125 55.1716 91.7326 55.1716H104.093C104.624 55.1716 105.132 54.9609 105.507 54.5858L121.129 38.9645C121.316 38.7769 121.422 38.5226 121.422 38.2574V7.17157L114.836 0.585786C114.055 -0.195263 112.788 -0.195261 112.007 0.585787L105.422 7.17157V37.6716C105.422 38.2239 104.974 38.6716 104.422 38.6716H90.9216C90.3693 38.6716 89.9216 38.2239 89.9216 37.6716V7.17157L83.3358 0.585786C82.5547 -0.195263 81.2884 -0.195261 80.5074 0.585787L73.9216 7.17157ZM7.17158 121.422H38.2486C38.519 121.422 38.7779 121.312 38.9662 121.118L54.6067 105.004C54.969 104.63 55.1716 104.131 55.1716 103.611V91.25C55.1716 90.7196 54.9609 90.2109 54.5858 89.8358L38.9645 74.2145C38.7769 74.0269 38.5226 73.9216 38.2574 73.9216H7.17157L0.585786 80.5074C-0.195263 81.2884 -0.195261 82.5547 0.585787 83.3358L7.17157 89.9216H37.6716C38.2239 89.9216 38.6716 90.3693 38.6716 90.9216V104.422C38.6716 104.974 38.2239 105.422 37.6716 105.422H7.17157L0.585787 112.007C-0.195261 112.788 -0.19526 114.055 0.585789 114.836L7.17158 121.422ZM38.8598 72.4469L16.8851 50.4722V41.1585C16.8851 40.0539 17.7805 39.1585 18.8851 39.1585H28.1988L49.7655 60.7252C50.1561 61.1157 50.7892 61.1157 51.1798 60.7252L60.7257 51.1793C61.1162 50.7887 61.1162 50.1556 60.7257 49.7651L39.1589 28.1983V18.8846C39.1589 17.78 40.0544 16.8846 41.1589 16.8846H50.4726L72.4536 38.8656C72.6411 39.0531 72.7465 39.3075 72.7465 39.5727V61.6646C72.7465 62.195 72.5358 62.7037 72.1607 63.0788L63.4205 71.819C63.0527 72.1868 62.5561 72.3968 62.0361 72.4046L39.5819 72.7397C39.3115 72.7438 39.051 72.6381 38.8598 72.4469ZM145.565 16.8284L123.591 38.8032C123.4 38.9944 123.294 39.2549 123.298 39.5252L123.633 61.9795C123.641 62.4995 123.851 62.9961 124.219 63.3638L132.959 72.1041C133.334 72.4791 133.843 72.6899 134.373 72.6899H156.465C156.73 72.6899 156.985 72.5845 157.172 72.397L179.153 50.416V41.1023C179.153 39.9977 178.258 39.1023 177.153 39.1023H167.839L146.273 60.669C145.882 61.0596 145.249 61.0596 144.858 60.669L135.312 51.1231C134.922 50.7326 134.922 50.0994 135.312 49.7089L156.879 28.1421V18.8284C156.879 17.7239 155.984 16.8284 154.879 16.8284L145.565 16.8284ZM121.422 157.095V188.172L114.836 194.757C114.055 195.538 112.788 195.538 112.007 194.757L105.422 188.172V157.672C105.422 157.119 104.974 156.672 104.422 156.672H90.9216C90.3693 156.672 89.9216 157.119 89.9216 157.672V188.172L83.3358 194.757C82.5547 195.538 81.2884 195.538 80.5074 194.757L73.9216 188.172V157.086C73.9216 156.821 74.0269 156.566 74.2145 156.379L89.8358 140.757C90.2109 140.382 90.7196 140.172 91.25 140.172H103.611C104.131 140.172 104.63 140.374 105.004 140.736L121.118 156.377C121.312 156.565 121.422 156.824 121.422 157.095ZM188.172 73.9216H157.095C156.824 73.9216 156.565 74.0311 156.377 74.2251L140.736 90.3396C140.374 90.7128 140.172 91.2125 140.172 91.7326V104.093C140.172 104.624 140.382 105.132 140.757 105.507L156.379 121.129C156.566 121.316 156.821 121.422 157.086 121.422H188.172L194.757 114.836C195.538 114.055 195.538 112.788 194.757 112.007L188.172 105.422H157.672C157.119 105.422 156.672 104.974 156.672 104.422V90.9216C156.672 90.3693 157.119 89.9216 157.672 89.9216H188.172L194.757 83.3358C195.538 82.5547 195.538 81.2884 194.757 80.5074L188.172 73.9216ZM156.483 122.896L178.458 144.871V154.185C178.458 155.289 177.563 156.185 176.458 156.185H167.144L145.578 134.618C145.187 134.227 144.554 134.227 144.163 134.618L134.617 144.164C134.227 144.554 134.227 145.188 134.617 145.578L156.184 167.145V176.459C156.184 177.563 155.289 178.459 154.184 178.459H144.871L122.89 156.478C122.702 156.29 122.597 156.036 122.597 155.77V133.679C122.597 133.148 122.807 132.639 123.182 132.264L131.923 123.524C132.29 123.156 132.787 122.946 133.307 122.939L155.761 122.603C156.032 122.599 156.292 122.705 156.483 122.896ZM51.1663 178.401L73.1411 156.427C73.3323 156.235 73.4379 155.975 73.4339 155.705L73.0987 133.25C73.091 132.73 72.8809 132.234 72.5132 131.866L63.7729 123.126C63.3979 122.751 62.8892 122.54 62.3587 122.54H40.2668C40.0016 122.54 39.7473 122.645 39.5597 122.833L17.5788 144.814L17.5788 154.128C17.5788 155.232 18.4742 156.128 19.5788 156.128H28.8925L50.4592 134.561C50.8497 134.17 51.4829 134.17 51.8734 134.561L61.4194 144.107C61.8099 144.497 61.8099 145.13 61.4194 145.521L39.8526 167.088V176.401C39.8526 177.506 40.748 178.401 41.8526 178.401H51.1663Z" fill="currentColor" />
        </svg>
    ),
    stars: (props: LucideProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.394 4.444c.188-.592 1.024-.592 1.212 0C8.4 8.9 9.1 9.6 13.556 10.394c.592.188.592 1.024 0 1.212C9.1 12.4 8.4 13.1 7.606 17.556c-.188.592-1.024.592-1.212 0C5.6 13.1 4.9 12.4.444 11.606c-.592-.188-.592-1.024 0-1.212C4.9 9.6 5.6 8.9 6.394 4.444m8.716 9.841a.41.41 0 0 1 .78 0c.51 2.865.96 3.315 3.825 3.826.38.12.38.658 0 .778-2.865.511-3.315.961-3.826 3.826a.408.408 0 0 1-.778 0c-.511-2.865-.961-3.315-3.826-3.826a.408.408 0 0 1 0-.778c2.865-.511 3.315-.961 3.826-3.826Zm2.457-12.968a.454.454 0 0 1 .866 0C19 4.5 19.5 5 22.683 5.567a.454.454 0 0 1 0 .866C19.5 7 19 7.5 18.433 10.683a.454.454 0 0 1-.866 0C17 7.5 16.5 7 13.317 6.433a.454.454 0 0 1 0-.866C16.5 5 17 4.5 17.567 1.317"></path></svg>
    ),
    menu: (props: LucideProps) => (
        <svg {...props} width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9H15M1 1H15" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    ),
    discord: (props: LucideProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path><path fill="currentColor" d="M15.003 4c.744 0 1.53.26 2.25.547l.527.216c1.26.528 1.968 1.636 2.517 2.853c.891 1.975 1.51 4.608 1.724 6.61c.102.95.127 1.906-.056 2.549c-.197.687-.867 1.173-1.518 1.555l-.322.183l-.334.186q-.26.144-.525.284l-.522.27l-.717.357l-.577.284a1 1 0 1 1-.894-1.788l.79-.39l-.58-.609c-1.39.57-3.027.893-4.766.893s-3.376-.322-4.766-.893l-.58.608l.793.39a1 1 0 1 1-.894 1.79l-.544-.27c-.402-.2-.805-.398-1.203-.607l-.928-.505l-.321-.183c-.651-.382-1.322-.868-1.518-1.555c-.184-.643-.158-1.598-.057-2.55c.214-2.001.833-4.634 1.724-6.609c.549-1.217 1.257-2.325 2.517-2.853C7.059 4.413 8.072 4 9 4c.603 0 1.077.555.99 1.147A14 14 0 0 1 12 5c.691 0 1.366.05 2.014.148A1.012 1.012 0 0 1 15.004 4ZM8.75 10.5a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5m6.5 0a1.75 1.75 0 1 0 0 3.5a1.75 1.75 0 0 0 0-3.5"></path></g></svg>
    ),
    twitter: (props: LucideProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5.8a8.5 8.5 0 0 1-2.36.64a4.13 4.13 0 0 0 1.81-2.27a8.2 8.2 0 0 1-2.61 1a4.1 4.1 0 0 0-7 3.74a11.64 11.64 0 0 1-8.45-4.29a4.16 4.16 0 0 0-.55 2.07a4.09 4.09 0 0 0 1.82 3.41a4.05 4.05 0 0 1-1.86-.51v.05a4.1 4.1 0 0 0 3.3 4a4 4 0 0 1-1.1.17a5 5 0 0 1-.77-.07a4.11 4.11 0 0 0 3.83 2.84A8.22 8.22 0 0 1 3 18.34a8 8 0 0 1-1-.06a11.57 11.57 0 0 0 6.29 1.85A11.59 11.59 0 0 0 20 8.45v-.53a8.4 8.4 0 0 0 2-2.12"></path></svg>
    ),
    instagram: (props: LucideProps) => (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13.028 2c1.125.003 1.696.009 2.189.023l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.153a4.9 4.9 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428c.012.266.022.487.03.712l.006.194c.015.492.021 1.063.023 2.188l.001.746v1.31a79 79 0 0 1-.023 2.188l-.006.194c-.008.225-.018.446-.03.712c-.05 1.065-.22 1.79-.466 2.428a4.9 4.9 0 0 1-1.153 1.772a4.9 4.9 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465l-.712.03l-.194.006c-.493.014-1.064.021-2.189.023l-.746.001h-1.309a78 78 0 0 1-2.189-.023l-.194-.006a63 63 0 0 1-.712-.031c-1.064-.05-1.79-.218-2.428-.465a4.9 4.9 0 0 1-1.771-1.153a4.9 4.9 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.428l-.03-.712l-.005-.194A79 79 0 0 1 2 13.028v-2.056a79 79 0 0 1 .022-2.188l.007-.194c.008-.225.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.9 4.9 0 0 1 3.68 3.678a4.9 4.9 0 0 1 1.77-1.153c.638-.247 1.363-.415 2.428-.465c.266-.012.488-.022.712-.03l.194-.006a79 79 0 0 1 2.188-.023zM12 7a5 5 0 1 0 0 10a5 5 0 0 0 0-10m0 2a3 3 0 1 1 .001 6a3 3 0 0 1 0-6m5.25-3.5a1.25 1.25 0 0 0 0 2.5a1.25 1.25 0 0 0 0-2.5"></path></svg>
    ),
};

export default Icons;
