import Modal from 'flarum/components/Modal';

export default class HowToUseModal extends Modal {
    title() {
        return 'How to Use';
    }

    content() {
        return [
            m('.Modal-body', [
                m('p', 'Here\'s how you can extend ' + this.props.className + '.' + this.props.methodName + ':'),
                m('pre', this.code()),
            ]),
        ];
    }

    code() {
        switch (this.props.methodType) {
            case 'ItemList':
                return 'import {extend} from \'flarum/extend\';\n' +
                    'import ' + this.props.className + ' from \'flarum/components/' + this.props.className + '\';\n' +
                    '\n' +
                    'extend(' + this.props.className + '.prototype, \'' + this.props.methodName + '\', items => {\n' +
                    '    items.add(\'example\', m(\'.example\', \'Hello World\'));\n' +
                    '});';
            case 'view':
                return 'import {override} from \'flarum/extend\';\n' +
                    'import ' + this.props.className + ' from \'flarum/components/' + this.props.className + '\';\n' +
                    '\n' +
                    'override(' + this.props.className + '.prototype, \'' + this.props.methodName + '\', original => {\n' +
                    '    return m(\'.wrapper\', original());\n' +
                    '});';
        }
    }
}
