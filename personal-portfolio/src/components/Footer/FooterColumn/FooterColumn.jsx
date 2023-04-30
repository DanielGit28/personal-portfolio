
//Title of the column
//Links: array of object links
//object link: {name: "", href: ""}
const FooterColumn = ({title, links}) => {

    return (
        <div className="footer__column">
            <h4 className="footer__column__title">{title}</h4>
            {links.map((link, i) => <a key={`${title} link ${link.name}${i}`} target="blank"  href={link.href} className="footer__column__link">{link.name}</a>)}
        </div>
    )
}
export default FooterColumn