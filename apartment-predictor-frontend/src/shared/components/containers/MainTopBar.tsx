import ThemeChanger from "../buttons/ThemeChanger";

export default function TopBar() {
    return (<div className="relative flex flex-row justify-between md:justify-center rounded-xl bg-(--text)/10 p-3 items-center">
        <h2 className="cursor-default text-(--title) decoration-2 italic decoration-double underline-offset-4 decoration-(--text) underline font-black text-4xl text-center self-center">Apartment Predictor</h2>
        <div className="md:absolute md:right-3 md:top-1/2 md:-translate-y-1/2">
            <ThemeChanger></ThemeChanger>
        </div>
    </div>)
}